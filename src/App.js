import React, { useState } from 'react';
import HeaderComponent from "./components/header/header";
import SidebarComponent from "./components/sidebar/sidebar";
import ContentComponent from "./components/content/content";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div>
      <HeaderComponent isSidebarOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
      <SidebarComponent isSidebarOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
      <ContentComponent isSidebarOpen={isSidebarOpen} />
    </div>
  );
}

export default App;