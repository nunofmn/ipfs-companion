const html = require('choo/html')

module.exports = function welcomePage (state, emit) {
  return html`
  <div>
    <div id="header" class="mw-100 flex justify-center items-center pl5 pt5 pr5 avenir">
      <div class="w-70 flex flex-column items-start white">
        <div class="flex">
          <img class="logo" src="../../icons/ipfs-logo-on.svg" alt="IPFS Logo">
          <h2 class="f2 pl3 fw2 light-gray">Welcome to the Distributed Web!</h2>
        </div>

        <div class="pa4">
          <p class="f2 fw5 lh-copy ma0 light-gray">
            Thank you for installing IPFS Companion!
          </p>
          <p class="f3 fw2 lh-copy light-gray">
            You are now able to use distributed webs applications and websites built with IPFS.
          </p>
        </div>
      </div>
    </div>

    <div id="content" class="mw-100 flex justify-center items-center pl5 pt3 pr5 helvetica">
      <div class="w-70 flex flex-column items-start pl4">
        <div id="learn-section">
          <h3 class="f3 fw6">Learn more</h3>
          <p class="near-black">Learn why we need a distributed web to make the web faster, safer and more open.</p>
          <ul class="dweb-links">
            <li class="pa1">
              <a class="dark-blue" href="https://www.youtube.com/watch?v=2RCwZDRwk48">The next Internet Revolution | Juan Benet | TEDxSanFrancisco</a>
            </li>
            <li class="pa1">
              <a class="dark-blue" href="https://motherboard.vice.com/en_us/article/78xgaq/the-interplanetary-file-system-wants-to-create-a-permanent-web">The InterPlanetary File System Wants to Create a Permanent Web | Motherboard</a>
            </li>
          </ul>
        </div>
        <div id="app-section">
          <h3 class="f3 fw6">Applications</h3>
          <p class="near-black">Try some of the applications built with IPFS.</p>
          <ul class="app-list w-60 flex flex-wrap">
            <li class="app-item pa3">
              <img src="../../icons/peerpad-logo.svg" alt="Peerpad Logo">
            </li>
            <li class="app-item pa3">
              <img src="../../icons/peerpad-logo.svg" alt="Peerpad Logo">
            </li>
            <li class="app-item pa3">
              <img src="../../icons/peerpad-logo.svg" alt="Peerpad Logo">
            </li>
            <li class="app-item pa3">
              <img src="../../icons/peerpad-logo.svg" alt="Peerpad Logo">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
}