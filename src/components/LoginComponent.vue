<template>
  <div class="login-page">
    <Form @submit="handleLogin">
      <div class="email">
        <label>Email: </label>
        <Field class="validate" name="email" :rules="validateEmail" />
        <ErrorMessage class="text-error" name="email" />
      </div>
      <div class="password">
        <label>Password: </label>
        <Field
          class="validate"
          type="password"
          name="password"
          :rules="validatePassWord"
        />
        <ErrorMessage class="text-error" name="password" />
      </div>
      <button type="submit">Login</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin(value) {
      localStorage.setItem("user", JSON.stringify(value.email));
      if (this.$route.query.redirect) {
        this.$router.push(this.$route.query.redirect);
      } else {
        this.$store.dispatch("isLogin", true);
        this.$router.push("/blog");
      }
    },
    validateEmail(email) {
      // if the field is empty
      if (!email) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(email)) {
        return "This field must be a valid email";
      }
      // All is good
      return true;
    },
    validatePassWord(password) {
      if (!password) {
        return "This field is required";
      }
      return true;
    },
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
};
</script>

<style>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  border: 1px solid red;
  width: 500px;
  height: 350px;
  margin: 0 auto;
  padding: 10px 10px;
}

.validate {
  display: block;
  width: 300px;
  height: 30px;
}

.text-error {
  color: red;
}

.email {
  margin-bottom: 30px;
}

.password {
  margin-bottom: 30px;
}
</style>