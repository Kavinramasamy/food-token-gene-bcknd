const WelcomeComp = async (req, res) => {
  try {
    // Welcome response to check backend is working or not
    await res
      .status(200)
      .json({ message: "Welcome to food token generator Backend" });
  } catch (error) {
    await res.status(500).json({ Error: "Internal Server Error", error });
  }
};
export default WelcomeComp;
