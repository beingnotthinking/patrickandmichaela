const axios = require("axios");

require("dotenv").config();

exports.handler = async function youtube(event, context) {
  try {
    const channelId = "UCsFSIDI9M6bxC8l4d63eqMw"; // Your YouTube channel ID
    const apiKey = process.env.YOUTUBE_API_KEY;
    const maxResults = 6;

    if (!apiKey) {
      return {
        statusCode: 500,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ error: "YouTube API key not configured. Check your .env or Netlify environment variables." }),
      };
    }

    // First, get the uploads playlist ID
    const channelResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );

    if (!channelResponse.data.items || channelResponse.data.items.length === 0) {
      return {
        statusCode: 404,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ error: "Channel not found. Response:", details: channelResponse.data }),
      };
    }

    const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

    // Get recent videos from the uploads playlist
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
    );

    const videos = videosResponse.data.items.map((item) => {
      const snippet = item.snippet;
      return {
        id: snippet.resourceId.videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: snippet.thumbnails.medium.url,
        publishedAt: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
      };
    });

    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(videos),
    };
  } catch (error) {
    console.error("YouTube API Error:", error?.response?.data || error.message || error);
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Failed to fetch YouTube videos.",
        details: error?.response?.data || error.message || error
      }),
    };
  }
}; 