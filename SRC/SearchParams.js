import React from "react";

export function SearchParams() {
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </form>
      <button>Submit</button>
    </div>
  );
}
