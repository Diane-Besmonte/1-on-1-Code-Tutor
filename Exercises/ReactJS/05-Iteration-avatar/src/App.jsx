import Avatar from "./Avatar";

// RECREATE THIS TO USE ITERATION. FEEL FREE TO CREATE A DATA ARRAY FOR THE DETAILS
function App() {
  const avatars = [
    {
      id: 1,
      src: "https://sandpack-bundler.vercel.app/img/avatars/001.png",
      alt: "person with curly hair and a black T-shirt",
    },
    {
      id: 2,
      src: "https://sandpack-bundler.vercel.app/img/avatars/002.png",
      alt: "person wearing a hijab and glasses",
    },
    {
      id: 3,
      src: "https://sandpack-bundler.vercel.app/img/avatars/003.png",
      alt: "person with short hair wearing a blue hoodie",
    },
    {
      id: 4,
      src: "https://sandpack-bundler.vercel.app/img/avatars/004.png",
      alt: "person with a pink mohawk and a raised eyebrow",
    },
  ];

  return (
    <div className="avatar-set">
      {/* <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/001.png"
        alt="person with curly hair and a black T-shirt"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/002.png"
        alt="person wearing a hijab and glasses"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/003.png"
        alt="person with short hair wearing a blue hoodie"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/004.png"
        alt="person with a pink mohawk and a raised eyebrow"
      /> */}
      {avatars.map((avatar, index) => (
        <Avatar key={avatar.id} src={avatar.src} alt={avatar.alt} />
      ))}
    </div>
  );
}

export default App;
