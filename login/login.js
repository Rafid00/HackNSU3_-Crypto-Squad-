$(".register-now").click(function () {
   $(".login-field").css({ animation: "slideOut .6s ease-in-out forwards" });
   setTimeout(function () {
      $(".login-field").css("display", "none");
      $(".body-wrapper").append(`<div class="reg-field">
    <div class="intro-name">Register</div>
    <div class="input-groups reg-input-groups">
       <div class="fullname">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" />
       </div>
       <div class="email">
          <label for="email">Email Address</label>
          <input type="email" id="email" />
       </div>
       <div class="phone">
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" />
       </div>
       <div class="password">
          <label for="password">Password</label>
          <input type="password" id="password" />
       </div>
       <div class="empty"></div>
       <div class="sign-in-btn">
          <button type="button" id="sign-in-btn">Register Now</button>
       </div>
    </div>
 </div>`);
      $(".reg-field").css({ animation: "slideIn 1s ease-in-out forwards" });
   }, 600);
});
