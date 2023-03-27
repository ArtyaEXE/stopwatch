<!-- eslint-disable -->
<template>
    <div class="timer">
      <div class="timer__display" :class="{ activeTimer: isRunning }">{{ time }}</div>
      <div class="timer__controls" :class="{ activeBtns: isRunning }">
        <button class="timer__button start" :class="{ activeBtn: isRunning }" @click="startTimer"></button>
        <button class="timer__button reset" :class="{ activeReset: isRunning}" @click="resetTimer"></button>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        startTime: null,
        timeElapsed: 0,
        intervalId: null,
        isRunning: false
      };
    },
    computed: {
      time() {
        let seconds = Math.floor(this.timeElapsed / 1000) % 60;
        let minutes = Math.floor(this.timeElapsed / 1000 / 60) % 60;
        let hours = Math.floor(this.timeElapsed / 1000 / 60 / 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      },
    },
    methods: {
      startTimer() {
        if (!this.isRunning) {
          this.startTime = Date.now() - this.timeElapsed;
          this.intervalId = setInterval(() => {
            this.timeElapsed = Date.now() - this.startTime;
          }, 10);
          this.isRunning = true;
        } else {
          clearInterval(this.intervalId);
          this.isRunning = false;
        }
      },
      resetTimer() {
        clearInterval(this.intervalId);
        this.timeElapsed = 0;
        this.isRunning = false;
      }
    }
  };
  </script>