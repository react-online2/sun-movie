import "./ToggleSwitch.css";


function ToggleSwitch({ setMovieSerial, movieSerial }) {

  function handleClickOne(e) {
    if (e.target.offsetParent.classList.length <= 1) {
      const target =
        e.target.offsetParent.classList[0] === "anchor"
          ? e.target
          : e.target.offsetParent;
      e.preventDefault();
      const selected = document.querySelector(".anchor.selected");
      const background = document.querySelector(".anchor > .background");
      const wrapper = document.querySelector(".toggle-switch");
      const leftBack = wrapper.offsetWidth - target.offsetParent.offsetWidth;

      // Style
      background.style.width = `${target.offsetParent.offsetWidth}px`;
      background.style.left =
        background.style.left !== "-1px" && background.style.left !== ""
          ? "-1px"
          : `${leftBack + 1}px`;
      background.style.borderRadius = "6px 0px 0px 6px";
      target.offsetParent.classList.add("selected");
      selected.classList.remove("selected");

      setMovieSerial("movie");
    }
  }

  function handleClickTwo(e) {
    if (e.target.offsetParent.classList.length <= 1) {
      const target =
        e.target.offsetParent.classList[0] === "anchor"
          ? e.target
          : e.target.offsetParent;
      e.preventDefault();
      const selected = document.querySelector(".anchor.selected");
      const background = document.querySelector(".anchor > .background");
      const wrapper = document.querySelector(".toggle-switch");
      const leftBack =
        wrapper.offsetWidth - target.offsetParent.offsetWidth - 4;

      // Style
      background.style.width = `${target.offsetParent.offsetWidth}px`;
      background.style.left =
        background.style.left !== "-1px" && background.style.left !== ""
          ? "-1px"
          : `${leftBack + 1}px`;
      background.style.borderRadius = "0px 6px 6px 0px";
      target.offsetParent.classList.add("selected");
      selected.classList.remove("selected");

     
      setMovieSerial("tv");
    }
  }
  return (
    <>
      {movieSerial === "movie" ? (
        <div className="toggle-switch">
          <div className="anchor selected" onClick={handleClickOne}>
            <h3>
              <span>Movies</span>
            </h3>
            <div className="background"></div>
          </div>
          <div className="anchor" onClick={handleClickTwo}>
            <h3>
              <span>Serials</span>
            </h3>
          </div>
        </div>
      ) : (
        <div className="toggle-switch">
          <div className="anchor" onClick={handleClickOne}>
            <h3>
              <span>Movies</span>
            </h3>
          </div>
          <div className="anchor selected" onClick={handleClickTwo}>
            <div className="bckg background"></div>
            <h3>
              <span>Serials</span>
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
export default ToggleSwitch;
