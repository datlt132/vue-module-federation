<template>
  <div id="app">
    <nav style="    height: 100%;  width: 70px;    position: absolute;    left: 0;    background: #555960;    top: 0;">
      <div style="position: relative; height: 100%">
        <div style="height: 40px; width: 70px; border-bottom: thin solid white;     display: grid;">
          <button style="place-content: center; background: #555960; border: none">
            <a href="/" style="text-decoration: none;color: white">HOME</a>
          </button>
        </div>
        <ul style="color: white;display: flex; padding: 0;    margin-top: 20px;flex-direction: column;align-items: center;">
          <li style="list-style: none; display: grid; flex-direction: column; justify-content: center">
            <a href="/#/cslegal" style="cursor: pointer; text-decoration: none;">
              <button style=" cursor: pointer; padding: 0;  place-content: center;    background: white;    display: flex;
                border: thin solid white;    border-radius: 4px;    flex-direction: column; align-items: center;    justify-content: center;">
                <i class="material-icons" style="color: #0067b2; font-size: 30px">calculate</i>
                <span style="color: #0067b2; font-size: 10px">Cslegal</span>
              </button>
            </a>
          </li>
        </ul>
        <ul style="color: white;display: flex; padding: 0;margin-top: 20px;flex-direction: column;align-items: center;
            position: absolute; bottom: 0; margin-left: 13px;">
          <li style="list-style: none; display: grid; flex-direction: column; justify-content: center">
            <a href="/#/baseapp" style="cursor: pointer; text-decoration: none;">
              <button style=" cursor: pointer; padding: 0;  place-content: center;    background: white;    display: flex;
                border: thin solid white;    border-radius: 4px;    flex-direction: column; align-items: center;    justify-content: center;">
                <i class="material-icons" style="color: #0067b2; font-size: 30px">calculate</i>
                <span style="color: #0067b2; font-size: 10px">Base App</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

</style>
