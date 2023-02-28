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
      <q-item v-for="qweet in qweets" :key="qweet.date" class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Ashley Chen</strong>
            <span class="text-grey-7">@ashleyChen</span>
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
            <q-btn flat round color="grey" icon="fa-solid fa-trash" size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top> {{ qweet.date }} </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum quas, ipsam, perferendis possimus sunt tenetur cumque doloremque maxime, libero consectetur cum voluptas. Assumenda qui quasi ullam. Adipisci, iusto minima.",
          date: 1677551116103,
        },
        {
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum quas, ipsam, perferendis possimus sunt tenetur cumque doloremque maxime, libero consectetur cum voluptas. Assumenda qui quasi ullam. Adipisci, iusto minima.",
          date: 1677551135429,
        },
        {
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum quas, ipsam, perferendis possimus sunt tenetur cumque doloremque maxime, libero consectetur cum voluptas. Assumenda qui quasi ullam. Adipisci, iusto minima.",
          date: 1677551144776,
        },
      ],
    };
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
