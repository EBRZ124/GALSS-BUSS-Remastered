function Contacts() {
  return (
    <>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h4 className="mb-1">Autobusu pasūtīšana:</h4>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Tālrunis: +371 29110885, +371 67226006</p>
          <p className="mb-1">Fakss: +371 67226006</p>
          <small>e-pasts: info@galssbuss.lv</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Papildus informācija</h5>
            <small className="text-body-secondary">3 days ago</small>
          </div>
          <p className="mb-1">tālrunis: +371 67226006 </p>
        </a>
      </div>
    </>
  );
}

export default Contacts;
