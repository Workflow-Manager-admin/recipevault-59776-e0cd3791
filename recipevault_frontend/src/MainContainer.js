import React, { useState } from "react";
import "./MainContainer.css";

// PUBLIC_INTERFACE
function MainContainer() {
  /** Main container for RecipeVault app.
   *  Implements sidebar navigation, integrates theme selection, and layout for main app features.
   */

  // Sidebar navigation items
  const navigation = [
    { label: "Browse Recipes", key: "browse" },
    { label: "Add Recipe", key: "add" },
    { label: "My Recipes", key: "myrecipes" },
    { label: "Account", key: "account" },
  ];

  // App section and authentication state
  const [section, setSection] = useState("browse");
  const [user, setUser] = useState(null);

  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState("light");

  // PUBLIC_INTERFACE
  function toggleTheme() {
    /** Toggles between light and dark themes */
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  // Simulate login/logout (for demo)
  const handleAuth = () =>
    setUser((prev) => (prev ? null : { name: "Chef User" }));

  // Render section content
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
                <div>
                  Logged in as <b>{user.name}</b>
                </div>
                <button className="rv-btn rv-btn-logout" onClick={handleAuth}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div>Please log in to manage your account.</div>
                <button
                  className="rv-btn rv-btn-primary"
                  onClick={handleAuth}
                >
                  Login
                </button>
              </>
            )}
          </div>
        );
      default:
        return <div className="rv-content">Welcome to RecipeVault!</div>;
    }
  };

  // Theme toggle button
  const ThemeToggle = () => (
    <button
      className="rv-theme-toggle"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <span role="img" aria-label="Moon">
          🌙
        </span>
      ) : (
        <span role="img" aria-label="Light">
          ☀️
        </span>
      )}
      <span className="rv-theme-toggle-label">
        {theme === "light" ? "Dark" : "Light"} Mode
      </span>
    </button>
  );

  // Apply theme class to main app container
  return (
    <div className={`rv-app rv-theme-${theme}`}>
      {/* Sidebar Navigation */}
      <aside className="rv-sidebar">
        <div className="rv-sidebar-header">
          <span className="rv-logo">🍴</span>
          <span className="rv-app-title">RecipeVault</span>
        </div>
        {/* Add Theme Toggle switch/button */}
        <div className="rv-sidebar-theme-toggle">
          <ThemeToggle />
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
