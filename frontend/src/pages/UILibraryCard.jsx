
function UILibraryCard() {
  return (
    <>
        <div className="card glass w-96 m-6 p-6 ">
        <p className="font-semibold">Input: image</p>
        <hr />
        <br/>
        <input class="size-20" type="image" id="image" alt="Login" src="./src/assets/images/landingPage.avif" />
        <br />
        </div>
    </>
  );
}

export default UILibraryCard;
