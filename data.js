const activities = [
    {
      id: 1,
      name: "Yoga Class",
      time: "2024-09-24T08:00:00Z",
      duration: "60 mins",
      username: "JohnDoe",
      price: "$15",
      capacity: 8,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "upcoming"
    },
    {
      id: 2,
      name: "Cycling Class",
      time: "2024-09-25T10:00:00Z",
      duration: "45 mins",
      username: "JaneDoe",
      price: "$20",
      capacity: 6,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "upcoming"
    },
    {
      id: 3,
      name: "Pilates Class",
      time: "2024-09-26T07:00:00Z",
      duration: "50 mins",
      username: "AlexDoe",
      price: "$18",
      capacity: 7,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "upcoming"
    },
    {
      id: 4,
      name: "Strength Training",
      time: "2024-09-27T09:30:00Z",
      duration: "40 mins",
      username: "MichaelDoe",
      price: "$22",
      capacity: 5,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "upcoming"
    },
    {
      id: 5,
      name: "HIIT Class",
      time: "2024-09-28T08:30:00Z",
      duration: "30 mins",
      username: "ChrisDoe",
      price: "$25",
      capacity: 9,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "upcoming"
    },
    {
      id: 6,
      name: "Zumba Class",
      time: "2024-09-20T07:00:00Z",
      duration: "50 mins",
      username: "AmyDoe",
      price: "$19",
      capacity: 4,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "past"
    },
    {
      id: 7,
      name: "Cardio Kickboxing",
      time: "2024-09-19T09:00:00Z",
      duration: "55 mins",
      username: "SarahDoe",
      price: "$17",
      capacity: 7,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "past"
    },
    {
      id: 8,
      name: "Dance Class",
      time: "2024-09-18T08:30:00Z",
      duration: "40 mins",
      username: "DavidDoe",
      price: "$12",
      capacity: 6,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "past"
    },
    {
      id: 9,
      name: "CrossFit Class",
      time: "2024-09-17T10:00:00Z",
      duration: "60 mins",
      username: "EmilyDoe",
      price: "$28",
      capacity: 8,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "past"
    },
    {
      id: 10,
      name: "Bootcamp",
      time: "2024-09-16T08:00:00Z",
      duration: "35 mins",
      username: "DanielDoe",
      price: "$16",
      capacity: 10,
      totalCapacity: 10,
      image: "https://firebasestorage.googleapis.com/v0/b/onthespotapptestau.appspot.com/o/vnZAZKweKOUPmLYZKMv4%2Fimages%2F1719924902871_nzj2zwpsw3.jpeg?alt=media&token=63e9e545-a4d5-4a19-a061-3f88ec87c7b7",
      status: "past"
    }
  ];

  module.exports = activities;
  