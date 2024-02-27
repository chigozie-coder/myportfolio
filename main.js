console.log('Hello World!');
$.ripple("button", {
	debug: false, // Turn Ripple.js logging on/off
	on: 'mousedown', // The event to trigger a ripple effect

	opacity: 0.7, // The opacity of the ripple
	color: "white", // Set the background color. If set to "auto", it will use the text color
	multi: false, // Allow multiple ripples per element

	duration: 0.5, // The duration of the ripple

	// Filter function for modifying the speed of the ripple
	rate: function(pxPerSecond) {
        return pxPerSecond;
    }(2),

	easing: 'linear' // The CSS3 easing function of the ripple
});
// Initialize nprogress with custom settings
function createProgress(elm, args) {
  const progress_container = $(elm);
  data = args.data
  color = args.color
  data.forEach(data => {
    const progress = $('<div>', {
      class: 'progress'
    })
    const progress_text = $('<div>', {
      class: 'progress_text',
      text: data.title
    })
    const progress_outer = $('<div>', {
      class: 'progress_outer'
    })
    const progress_inner = $('<div>', {
      class: 'progress_inner',
      width: `${data.value}%`
    })
    /*progress_inner.style.width = data.value*/
    progress.append(progress_text)
    progress.append(progress_outer)
    progress_outer.append(progress_inner)
    progress_container.append(progress)
  })
}

createProgress("#app_stack", {
  color: "dodgerblue",
  data: [{
    title: 'Sketchware',
    value: 80
  },
  {
    title: 'Java/Android',
    value: 30
  },
  ]
})
createProgress("#web_stack", {
  color: "dodgerblue",
  data: [{
    title: 'HTML',
    value: 80
  },
  {
    title: 'CSS',
    value: 70
  },
  {
    title: 'JavaScript',
    value: 50
  }
  ]
})
createProgress("#ds_stack", {
  color: "dodgerblue",
  data: [{
    title: 'SQL',
    value: 30
  },
  {
    title: 'Python(Data Analysis)',
    value: 70
  },
  {
    title: 'Python(Data Science',
    value: 70
  }
  ]
})

createProgress("#ml_stack", {
  color: "dodgerblue",
  data: [{
    title: 'Scikit-Learn',
    value: 70
  },
  {
    title: 'Pytorch',
    value: 50
  },
  {
    title: 'Others',
    value: 70
  }
  ]
})
const typed = new Typed('#typer', {
  strings: ['Web Developer', 'App Developer', 'Data Analyst', 'Data Scientist', 'Machine Learning Engineer'],
  typeSpeed: 50,
  backSpeed: 20,
  loop: true,
});
document.querySelector("#ham").onclick = () =>{
  document.querySelector("#ham").classList.toggle("open")
  document.querySelector("#nav").style.display="block"
  document.querySelector("#nav").classList.toggle("show")
}