<template>
  <v-app id="verification">
    <v-main id="verification-content">
      <!-- <div class="center" style="position: absolute; top: 0; left: 0">
        <v-btn
          id="go-back"
          class="btn"
          style="--min-w: max-content; --p: .2em; --br: 50%"
          @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
        <label for="go-back" class="hspan" style="--fw: 500">Go back</label>
      </div> -->

      <div class="window-content divcol center tcenter" style="gap: 2em">
        <img src="~/assets/sources/logos/logo.svg" alt="logo" style="--w: max(150px, 18em)">

        <div class="divcol center" style="gap: 1em; margin-top: 7.5em">
          <p class="p hspan" style="--fs: max(16px, 1.8em); --fw: 500">
            Hemos enviado un código de verificación a tu correo electrónico 
            <span style="--fw: 800; font-style: italic">{{email}}</span>
          </p>

          <v-otp-input
            v-model="otp"
            length="5"
            type="number"
            @keyup="$event => $event.key === 'Enter' ? verificationCode() : ''"
          ></v-otp-input>
          <!-- <v-text-field
            v-model="otp"
            hide-details solo
            @keyup="$event => $event.key === 'Enter' ? verificationCode() : ''"
          ></v-text-field> -->


          <v-btn
            :disabled="!otp"
            class="btn" style="--fs: max(13px, 1.6em)"
            @click="verificationCode()"
          >Verificar</v-btn>
        </div>

        <div class="divcol" style="gap: 1em;">
          <a
            class="hspan" style="text-decoration: underline; --fs: max(16px, 1.6em); --fw: 800"
            @click="sendEmail()"
          >Reenviar Código</a>
          <span class="hspan" style="opacity: .8; --fs: max(14px, 1.1em)">No olvides revisar tu bandeja de SPAM</span>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "VerificationEmailPage",
  layout: "empty-layout",
  data() {
    return {
      otp: undefined,
      loadingBtnVerificationEmail: false,
    }
  },
  head() {
    const title = 'Email Verification';
    return {
      title,
    }
  },
  computed: {
    params() {
      return this.$route.params.verification
    },
    email() {
      return this.$store.state.currentEmailVerification.email
    }
  },
  mounted() {
    if (!this.email) {
      this.$alert("cancel", {desc: "ha ocurrido un error por favor vuelva a intentarlo mas tarde"})
      this.$router.go(-1)
    }
    // if (this.params?.split(":")[1] !== "login") this.sendEmail()
  },
  methods: {
    sendEmail() {
      // request token endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/solicitarTokenCorreo`, {"email": this.email}).then(result => {
        console.info(result.data) // console
        this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
      }).catch(err => {
        console.error(err)
        this.$alert("cancel", {desc: err.message})
      })
    },
    verificationCode() {
      // if (!this.otp) return;
      if (!(this.otp?.length === 5)) return;
      this.loadingBtnVerificationEmail = true

      // confirmation token endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/validarCorreo`, {"token": this.otp}).then(result => {
        console.info(result) // console
        this.loadingBtnVerificationEmail = false
        // set current verification
        this.$store.commit("emailVerification", {token: this.otp, email: this.email})
        // redirection to previous page
        this.$router.push(this.localePath(`/${this.params.split(":")[1]}`))
      }).catch(err => {
        console.error(err)
        this.loadingBtnVerificationEmail = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
};
</script>

<style lang="scss">
// need setting this 👇
#verification {
  & > * {
    font-size: var(--resizer);
  }
  .v-main {
    padding-block: calc(var(--h-navbar) + 20px) var(--h-footer, 80px) !important;
    & > * {
      @include media(max, small) {
        font-size: var(--resizer-mobile)
      }
    }
  }

  &-content {
    @include parent;
    padding-inline: var(--margin-global);

    .window-content {
      --width: min(100%, 37em);
      width: var(--width);
      margin-inline: auto;
    }

    h2 {
      --fs: max(18px, 2.3em);
      text-align: center;
    }
    h3 {
      text-align: center;
      --fw: 900;
      --fs: max(16px, 1.5em);
    }
    label {
      --fw: 900;
      --fs: max(16px, 1.3em);
      // text-indent: 1ch;
      padding-left: 1ch;
    }
    .v-btn.btn {
      --bg: var(--primary);
      --fs: max(15px, 1.4em);
      --w: max-content;
    }
    ul {
      padding-left: 0;
      list-style: none;
      li {
        opacity: .8;
        font-size: max(14px, 1.15em);
        line-height: 1.1;
        & + li {margin-top: .5ch}
        a {
          --fw: 100;
          opacity: .65;
          font-style: italic;
        }
      }
    }

    .v-input {
      --bg: var(--primary);
    }
    .container-label {
      label {
        text-align: start;
        gap: 5px;
        flex-wrap: wrap;
      }
      label span {
        --fw: 100;
        font-size: .8em;
        opacity: .6;
        font-style: italic;
      }
    }

    .v-otp-input {
      .v-input__slot {
        background-color: #fff !important;
        width: clamp(2.5em, 5vw, 5.3125em);
        aspect-ratio: 1 / .95;
        input {
          color: #000 !important;
          font-size: 19px !important;
          font-weight: 700 !important;
        }
      }
    }

    .v-file-input {
      // &:not(.wallet_direction) {max-width: 50% !important}
      .v-input__slot {
        aspect-ratio: 1.6 / 1 !important;
        @include media(max, 380px) {aspect-ratio: 2.6 / 1 !important}
        padding-inline: 0 !important;
      }
      .v-text-field__slot {
        width: 100% !important;
        height: 100% !important;
      }
      .v-label {
        @include media(max, 700px) {font-size: var(--resizer)}
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3px;
        height: 100% !important;
        width: 100% !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        padding: 0 !important;
        opacity: .7;
        img {--w: 1.7em}
        span.hspan {
          --fs: max(15px, 1.1em);
          --fw: 900;
        }
      }
    }
    .v-file-input.face-identity {
      .v-input__slot {
        aspect-ratio: 2.6 / 1 !important;
        padding-inline: 0 !important;
      }
    }

    .v-card {
      --bg: var(--accent);
    }
  }
}
</style>
