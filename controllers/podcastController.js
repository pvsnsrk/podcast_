const Podcast = require("../models/PodcastSchema");

module.exports = {
  getAllPodcasts: async (req, res) => {
    try {
      const podcasts = await Podcast.find();
      res.json(podcasts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getPodcastById: async (req, res) => {
    try {
      const podcast = await Podcast.findById(req.params.id);
      if (!podcast) {
        return res.status(404).json({ message: "Podcast not found" });
      }
      res.json(podcast);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createPodcast: async (req, res) => {
    const {
      id,
      name,
      author_name,
      imageUrl,
      lang,
      timesplayed,
      type,
      musicName,
    } = req.body;

    try {
      const newPodcast = await Podcast.create({
        id,
        name,
        author_name,
        imageUrl,
        lang,
        timesplayed,
        type,
        musicName,
      });
      res.status(201).json(newPodcast);
      
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updatePodcast: async (req, res) => {
    try {
      const { id,name,author_name,imageUrl,lang,timesplayed,type,musicName} = req.body;

      console.log(`Updating podcast with ID: ${req.params.id}`);
      console.log("Update Data:", req.body);

      const updatedPodcast = await Podcast.findByIdAndUpdate(
        req.params.id,
        {
          id: "",
          name: "",
          author_name: "",
          imageUrl: "",
          lang: "",
          timesplayed: "",
          type: "",
          musicName: "",
          // Update other fields as needed
        },
        { new: true, runValidators: true }
      );

      if (!updatedPodcast) {
        console.log("Podcast not found for update");
        return res.status(404).json({ message: "Podcast not found" });
      }

      console.log("Updated Podcast:", updatedPodcast);
      res.json(updatedPodcast);
    } catch (err) {
      console.error("Error updating podcast:", err);
      res.status(500).json({ message: err.message });
    }
  },

  deletePodcast: async (req, res) => {
    try {
      const deletedPodcast = await Podcast.findByIdAndDelete(req.params.id);

      if (!deletedPodcast) {
        return res.status(404).json({ message: "Podcast not found" });
      }

      res.json({ message: "Podcast deleted successfully" });
    } catch (err) {
      console.error("Error deleting podcast:", err);
      res.status(500).json({ message: "Error deleting podcast. Please try again." });
    }
  }, 
  
    
};
