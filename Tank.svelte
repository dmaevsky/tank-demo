<script>
  export let value = 0.5;
  export let name;
</script>

<svg version="1.1" viewBox="0 0 520 300" width="50%" style="max-width: 520px;">
   <defs>
      <marker id="marker2367" overflow="visible" orient="auto">
         <path transform="matrix(-.4 0 0 -.4 -4 0)" d="m0 0 5-5-17.5 5 17.5 5z" fill="#393939" fill-rule="evenodd" stroke="#393939" stroke-width="1pt"></path>
      </marker>
      <marker id="Arrow1Mend" overflow="visible" orient="auto">
         <path transform="matrix(-.4 0 0 -.4 -4 0)" d="m0 0 5-5-17.5 5 17.5 5z" fill="#393939" fill-rule="evenodd" stroke="#393939" stroke-width="1pt"></path>
      </marker>
      <linearGradient id={name} x1="100.96" x2="100.96" y1="154.44" y2="103.83" gradientTransform="matrix(3.8741 0 0 3.8995 -111.27 -254.56)" gradientUnits="userSpaceOnUse">
         <stop stop-color="#d7d7f4" offset="0"></stop>
         <stop stop-color="#d7d7f4" offset={value}></stop>
         <stop stop-color="rgba(0, 0, 0, 0)" offset={value}></stop>
         <stop stop-color="rgba(0, 0, 0, 0)" offset="1"></stop>
      </linearGradient>
   </defs>
   <metadata></metadata>
   <g transform="translate(-39.823 -87.134)">
      <path d="m361.92 149.83v189.63c0 5.4301-4.3449 9.8016-9.742 9.8016h-133.74c-5.397 0-9.7419-4.3715-9.7419-9.8016v-189.63" fill="url(#{name})" stop-color="#000000" stroke="#393939" stroke-linecap="round" stroke-width="4" style="mix-blend-mode:normal"></path>
      <ellipse cx="135.65" cy="246.04" rx="30.801" ry="30.924" fill="none" stop-color="#000000" stroke="#393939" stroke-width="3"></ellipse>
      <text transform="scale(.99801 1.002)" x="134.74388" y="254.08194" letter-spacing="0px" stroke-width=".26458" text-anchor="middle" word-spacing="0px" style="line-height:1.25">
         <tspan x="134.74388" y="254.08194" fill="#393939" stroke-width=".26458" text-anchor="middle">LT</tspan>
      </text>
      <g fill="none" stroke="#393939" stroke-width="3">
         <path d="m135.1 214.37v-47.775h72.669" stroke-linecap="square"></path>
         <path d="m135.1 279.18v47.775h72.669" stroke-linecap="square"></path>
         <path d="m343.41 350.79v28.209h174.21" marker-end="url(#Arrow1Mend)" stroke-dashoffset=".55562"></path>
         <path d="m83.086 93.637h158.25v76.292" marker-end="url(#marker2367)" stroke-dashoffset=".55562"></path>
      </g>
   </g>
</svg>
