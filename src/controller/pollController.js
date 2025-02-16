const Poll = require("../model/poll");

exports.createPoll =  async (req, res) => {
  try {
    const { question, options } = req.body;
    const poll = new Poll({
      question,
      options: options.map(opt => ({ text: opt, votes: 0 }))
    });
    await poll.save();
    res.status(201).json({status: "success",poll});
    // res.status(200).json({status: "success", question, options});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


exports.getAllPolls =  async (req, res) => {
  try {
    const polls = await Poll.find().sort({ createdAt: -1 });
    res.json({status:"success", length:polls.length,polls});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


exports.getPoll = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: 'Poll not found' });
    res.json({status: "success", poll});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


exports.vote =  async (req, res) => {
  try {
    const { optionIndex } = req.body;
    const poll = await Poll.findById(req.params.id);
    if (!poll) return res.status(404).json({ error: 'Poll not found' });
    
    poll.options[optionIndex].votes += 1;
    await poll.save();
    res.json({status: "success", poll});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}