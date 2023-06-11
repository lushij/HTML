var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

// 显示第一张幻灯片
slides[slideIndex].classList.add("active");

// 上一张和下一张按钮的点击事件
document.querySelector(".prev").addEventListener("click", function() {
  showSlide(slideIndex - 1);
});

document.querySelector(".next").addEventListener("click", function() {
  showSlide(slideIndex + 1);
});

// 自动播放
var interval = setInterval(function() {
  showSlide(slideIndex + 1);
}, 500); // 每隔1秒切换一张图片

// 显示指定索引的幻灯片
function showSlide(index) {
  // 隐藏当前幻灯片
  slides[slideIndex].classList.remove("active");

  // 循环播放
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  // 显示指定索引的幻灯片
  slides[index].classList.add("active");

  slideIndex = index;
}

// 停止自动播放
function stopAutoPlay() {
  clearInterval(interval);
}

// 重新开始自动播放
function startAutoPlay() {
  interval = setInterval(function() {
    showSlide(slideIndex + 1);
  }, 3000);
}

// 鼠标悬停时停止自动播放，移出时重新开始自动播放
var slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseenter", stopAutoPlay);
slideshowContainer.addEventListener("mouseleave", startAutoPlay);
