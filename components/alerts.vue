<template>
  <div id="alerts">
    <v-snackbar
      v-for="(item,i) in dataAlerts" :key="i"
      v-model="item.model"
      :centered="item.centered"
      :top="item.top"
      :bottom="item.bottom"
      :left="item.left"
      :right="item.right"
      :timeout="item.timeout"
      transition="slide-Y-reverse-transition"
      :style="`--color-snackbar: ${item.color}`"
    >
      <v-btn icon class="close" style="--r: 14px; --t: 10px" @click="dataAlerts.splice(i, 1) ">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <!-- <v-icon :color="item.color" size="3.5em">{{ item.icon }}</v-icon> -->
      <img :src="require(`~/assets/sources/icons/${item.icon}.svg`)" :alt="`${item.icon} Icon`">
      <div class="divcol" style="gap: 5px">
        <h3 class="font1">{{item.title === item.key ? $t(item.title) : item.title}}</h3>
        <p
          class="font2 p"
          v-html="item.desc === `text${item.key.toCapitalize()}` ? $t(item.desc) : item.desc"
        ></p>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
import { ALERT_TYPE } from '~/plugins/dictionary';
export default {
  name: "AlertsComponent",
  data() {
    return {
      dataAlerts: []
    };
  },
  methods: {
    GenerateAlert(
      key, title = key,
      desc = `text${key.toCapitalize()}`,
      color = key === ALERT_TYPE.SUCCESS ? '#A4FDDF' : key === ALERT_TYPE.ERROR ? 'rgb(200, 0, 0)' : '',
      timeout = 5000, centered = true, top = true, bottom, left, right
    ) {
      // // create alert
      const alert = {
        key, title, desc, color, timeout, centered, top, bottom, left, right, model: true,
        icon: key, // ---> if img tag
        // icon: key === ALERT_TYPE.SUCCESS ? 'mdi-check-circle' : key === ALERT_TYPE.ERROR ? 'mdi-close-circle' : '', // ---> if mdi icon
      }
      if (alert.bottom) {alert.top = false}
      this.dataAlerts.push(alert)
      // clear alerts
      setTimeout(() => this.dataAlerts.shift(), timeout);
    },
  }
};
</script>

<style src="~/assets/styles/components/alerts.scss" lang="scss" />
