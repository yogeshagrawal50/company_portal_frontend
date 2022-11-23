var tour = new Tour({
    storage:false,
    steps: [
    {
      element: "#col-1",
      title: "Live classes",
      content: "Learn from our Experts and get Real-Time Guidance ",
      placement: "bottom",
      backdrop: true

    },
    {
      element: "#col-2",
      title: "Flexible schedule",
      content: "Reschedule your Batch/Class at Your Convenience",
      placement: "bottom",
      backdrop: true
    },
    {
        element: "#col-3",
        title: "24 X 7 Support",
        content: "Personalized Guidance from our 24X7 Support Team",
        placement: "bottom",
        backdrop: true
      },
      {
        orphan:true,
        title: "Thank You",
        content: "Thank You for the tour.",
        placement: "bottom",
      backdrop: true
      }
  ]});
  
  // Initialize the tour
  tour.init();
  
  // Start the tour
  tour.start();