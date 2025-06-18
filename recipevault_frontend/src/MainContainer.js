import React, { useState } from "react";
import "./MainContainer.css";

// PUBLIC_INTERFACE
function MainContainer() {
  /** Main container for RecipeVault app.
   *  Implements sidebar navigation, integrates light theme, and layout for main app features.
   */

  // Sidebar navigation items
  const navigation = [
    { label: "Browse Recipes", key: "browse" },
    { label: "Add Recipe", key: "add" },
    { label: "My Recipes", key: "myrecipes" },
    { label: "Account", key: "account" },
  ];

  // Content to display by section (placeholder logic for now)
  const [section, setSection] = useState("browse");

  // Placeholder authentication/user state
  const [user, setUser] = useState(null);

  // Simulate login/logout (for demo)
  const handleAuth = () =>
    setUser((prev) => (prev ? null : { name: "Chef User" }));

  // Render section content (stub for now)
  const renderSection = () => {
    switch (section) {
      case "browse":
        return (
          <div className="rv-content">
            <h2>Browse Recipes</h2>
            <div>Explore delicious recipes here.</div>
          </div>
        );
      case "add":
        return (
          <div className="rv-content">
            <h2>Add a Recipe</h2>
            <div>Feature coming soon.</div>
          </div>
        );
      case "myrecipes":
        return (
          <div className="rv-content">
            <h2>My Recipes</h2>
            <div>View and manage your personal recipes.</div>
          </div>
        );
      case "account":
        return (
          <div className="rv-content">
            <h2>Account</h2>
            {user ? (
              <>
                <div>Logged in as <b>{user.name}</b></div>
                <button className="rv-btn rv-btn-logout" onClick={handleAuth}>Logout</button>
              </>
            ) : (
              <>
                <div>Please log in to manage your account.</div>
                <button className="rv-btn rv-btn-primary" onClick={handleAuth}>Login</button>
              </>
            )}
          </div>
        );
      default:
        return <div className="rv-content">Welcome to RecipeVault!</div>;
    }
  };

  return (
    <div className="rv-app">
      {/* Sidebar Navigation */}
      <aside className="rv-sidebar">
        <div className="rv-sidebar-header">
          <span className="rv-logo">🍴</span>
          <span className="rv-app-title">RecipeVault</span>
        </div>
        <nav className="rv-nav">
          {navigation.map((item) => (
            <button
              key={item.key}
              className={`rv-nav-link${section === item.key ? " active" : ""}`}
              onClick={() => setSection(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="rv-sidebar-footer">
          {user ? (
            <span className="rv-user">👤 {user.name}</span>
          ) : (
            <span className="rv-user rv-user-placeholder">Not logged in</span>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="rv-main-content">{renderSection()}</main>
    </div>
  );
}

export default MainContainer;
