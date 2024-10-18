const Display = () => {
  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea className="form-control" id="description" rows="3"></textarea>
      </div>
      <button className="btn btn-primary">Enter</button>
    </div>
  );
};

export default Display;
