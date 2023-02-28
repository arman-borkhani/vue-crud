<template>
  <form @submit.prevent="submitForm">    
    <div :class="{'form-group': true, 'invalid': attemptSubmit && missingTitle }">
      <label for="title">Title</label>
      <input class="form-control" type="text" id="title" v-model="postTitle"/>
      <div class="form-control-feedback" v-if="attemptSubmit && missingTitle">This field is required.</div>
    </div>
    <div :class="{'form-group': true, 'invalid': attemptSubmit && missingDesc }">
      <label for="description">Description</label>
      <textarea class="form-control" id="description" rows="10" v-model="postDesc"></textarea>
      <div class="form-control-feedback" v-if="attemptSubmit && missingDesc">This field is required.</div>
    </div>
    <div :class="{'form-group': true, 'invalid': attemptSubmit && missingCat }">
      <label for="category">Category</label>
      <select class="form-control" name="category" id="category" v-model="postCat">
        <option value="">Choose a Category</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <div class="form-control-feedback" v-if="attemptSubmit && missingCat">This field is required.</div>
    </div>
    <base-button>Save</base-button>
  </form>
</template>

<script>

export default {
  emits: ['submit-form'],
  props: {
    titleVal: {
      type: String,
      required: false,
      default: ''
    },
    descVal: {
      type: String,
      required: false,
      default: ''
    },
    catVal: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      postTitle: this.titleVal,
      postDesc: this.descVal,
      postCat: this.catVal,
      attemptSubmit: false,
      isValid: true
    }
  },
  computed: {
    categories() {
      return this.$store.getters['getCategories'];
    },    
    missingTitle() { 
      return this.postTitle === ''; 
    },
    missingDesc() { 
      return this.postDesc === ''; 
    },
    missingCat() { 
      return this.postCat === ''; 
    },
  },
  methods: {
    submitForm() {
      this.attemptSubmit = true;
      this.isValid = (this.missingTitle || this.missingDesc || this.missingCat) ? false : true;

      if( this.isValid ) {
        const data = {
          title: this.postTitle,
          desc: this.postDesc,
          cat: this.postCat
        };
  
        this.$emit('submit-form', data);
      }

    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
.form-group {
  margin: 0.5rem 0 1.25rem;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  margin-bottom: 0.5rem;
}

textarea.form-control {
  height: auto;
}

.form-control:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

.form-control-feedback {
  font-size: 0.75rem;
  color: red;
}
.invalid label {
  color: red;
}

.invalid .form-control {
  border: 1px solid red;
}
</style>