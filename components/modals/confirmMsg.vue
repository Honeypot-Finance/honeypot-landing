<template>
  <div>
    <v-dialog
      v-for="(item,i) in dataMsg" :key="i"
      v-model="item.model"
      content-class="modal-confirmation-message divcol relative isolate"
    >
      <aside class="space">
        <span style="--fw: 700" class="h9_em">{{item.title === "titleConfirmMsg" ? $t(item.title) : item.title}}</span>
        
        <v-btn icon @click="dataMsg.splice(i, 1)">
          <v-icon size="1.5em">mdi-close</v-icon>
        </v-btn>
      </aside>

      <v-sheet class="divcol" color="transparent" style="gap: 1em">
        <p style="--fw: 200" v-html="item.desc === 'textConfirmMsg' ? $t(item.desc) : item.desc"></p>
        
        <div class="spacee" style="gap: 1em">
          <v-btn
            :disabled="loadingBtnConfirm" class="btn" style="--bg: var(--success)"
            :loading="loadingBtnConfirm" @click="confirmation(item, i)"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
          
          <v-btn
            :disabled="loadingBtnCancel" class="btn" style="--bg: var(--error)"
            :loading="loadingBtnCancel" @click="cancelation(item, i)"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmationMessageModal",
  data() {
    return {
      dataMsg: [],
      loadingBtnConfirm: false,
      loadingBtnCancel: false,
    };
  },
  watch: {
    dataMsg(curr) {
      if (curr.length > 0) curr[curr.length-1].fOpen()
    }
  },
  methods: {
    GenerateMsg(
      fSuccess = () => {}, fCancel = () => {}, fOpen = () => {},
      title = "titleConfirmMsg", desc = "textConfirmMsg"
    ) {
      const msg = {
        title, desc, model: true, fSuccess, fCancel, fOpen
      }
      this.dataMsg.push(msg)
    },
    async confirmation(item, i) {
      this.loadingBtnConfirm = true
      await item.fSuccess()
      
      this.loadingBtnConfirm = false
      this.dataMsg.splice(i, 1)
    },
    async cancelation(item, i) {
      this.loadingBtnCancel = true
      await item.fCancel()
      
      this.loadingBtnCancel = false
      this.dataMsg.splice(i, 1)
    },
  }
};
</script>

<style lang="scss">
.modal-confirmation-message {
  @include card;
  --min-w: 330px;
  --max-w: 400px;
  --w: max-content;
  --br: 30px;
  --bg: var(--accent);
  --p: 30px;
  --tt: capitalize;
  gap: 20px;
  
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background-clip: content-box, border-box;
    background-image: linear-gradient(var(--bg),var(--bg)),
      linear-gradient(135deg, rgba($primary,.2), rgba($secondary,.2));
    z-index: -1;
  }

  i:not(.v-sheet i) {color: hsl(225 225% 225% / .5) !important}

  .v-sheet {
    .btn {
      --p: 5px 20px;
      // i {--c: #000}
    }
  }
}
</style>
