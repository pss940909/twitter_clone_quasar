<template>
  <q-page>
    <div class="q-px-md q-py-lg row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newQweetContent"
          placeholder="What's happening?"
          counter
          autogrow
          maxlength="280"
          class="new-qweet"
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          @click="addNewQweet"
          :disable="!newQweetContent"
          unelevated
          rounded
          color="primary"
          label="Qweet"
          no-caps
          class="q-mb-lg"
        />
      </div>
    </div>
    <q-separator size="10px" color="grey-2" class="divider" />
    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn slow"
        leave-active-class="animated fadeOut slow"
      >
        <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
          <q-item-section avatar top>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong>Ashley Chen</strong>
              <span class="text-grey-7">
                @ashleyChen
                <br class="lt-sm" />
                <span class="gt-xs">&bull;</span>
                {{ relativeDate(qweet.date) }}
              </span>
            </q-item-label>
            <q-item-label class="qweet-content text-body1">
              {{ qweet.content }}
            </q-item-label>
            <div class="qweet-icons row justify-between q-mt-md">
              <q-btn
                flat
                round
                color="grey"
                icon="fa-regular fa-comment"
                size="sm"
              />
              <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
              <q-btn flat round color="grey" icon="far fa-heart" size="sm" />
              <q-btn
                flat
                round
                color="grey"
                icon="fa-solid fa-trash"
                size="sm"
                @click="deleteQweet(qweet)"
              />
            </div>
          </q-item-section>
        </q-item>
      </transition-group>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { formatDistance } from "date-fns";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content: "The best way to predict your future is to create it.",
          date: 1677551116103,
        },
        {
          content: "Be the change you wish to see in the world.",
          date: 1677551135429,
        },
        {
          content: "The only way to do great work is to love what you do.",
          date: 1677551144776,
        },
      ],
    };
  },
  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now(),
      };
      this.qweets.unshift(newQweet);
      this.newQweetContent = "";
    },
    deleteQweet(qweet) {
      console.log("qweet", qweet);
      let dateToDelete = qweet.date;
      let index = this.qweets.findIndex((qweet) => qweet.date === dateToDelete);
      this.qweets.splice(index, 1);
    },
  },
});
</script>

<style lang="css">
.new-qweet textarea {
  font-size: 19px;
  line-height: 1.5 !important;
}
.divider {
  border-bottom: 1px solid #f8f8f8;
  border-top: 1px solid #f8f8f8;
}
.qweet-content {
  white-space: pre-line;
}
.qweet-icons {
  margin-left: -5px;
}
</style>
