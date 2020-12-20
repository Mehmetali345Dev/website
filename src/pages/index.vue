<template>
  <v-row no-gutters>
    <v-col cols="2">
      <v-img
        class="avatar"
        title="Yüzümü göstermem maalesef :>"
        alt="personal-image"
        src="/images/irl_image.jpg"
      ></v-img>

      <div class="skills">
        <div v-for="skill in skills" :key="skill.name">
          <small>{{ skill.name }}</small>

          <v-progress-linear
            class="progress"
            :value="skill.value"
            :color="skill.color"
            height="20"
          >
            <template v-slot="{ value }">
              <small>{{ Math.ceil(value) }}%</small>
            </template>
          </v-progress-linear>
        </div>
      </div>

      <div class="socials">
        <SocialMedia slice="5" />
      </div>
    </v-col>

    <v-col class="information" md="5">
      <h3 class="font-weight-light text-uppercase">Ben kimim?</h3>
      <p>
      </p>
        Merhaba ben Mehmet Ali (Namı değer Mehmetali_345) genç bir geliştiriciyim. Genellikle C# ve
        Javascript kullanarak masaüstü programları ve web uygulamaları yazıyorum. 
      <p>
        İnsanlarla kodlarımı paylaşmayı ve insanlara kodlamanın veya yazılım yazmanın ne kadar
        eğlenceli olduğunu anlatmayı seviyorum.    
      </p>

      <h3 class="font-weight-light text-uppercase">Şuanki Pozisyonlarım</h3>
      <div class="positions">
        <div
          v-for="position in positions.filter((p) => p.current)"
          :key="position.name"
        >
          <div>
            <v-img class="logo" alt="logo" :src="position.icon"></v-img>
            <span>{{ position.service }}</span>
          </div>
          <div>
            <span>{{ position.role }}</span>

            <a v-if="!position.samePage" :href="position.url" target="_blank">
              <v-icon>mdi-open-in-new</v-icon>
            </a>

            <nuxt-link v-else :to="position.url">
              <v-icon>mdi-open-in-new</v-icon>
            </nuxt-link>
          </div>
        </div>
      </div>
    </v-col>    
    <v-col class="projects">
      <h3 class="font-weight-light text-uppercase">Projelerim</h3>
      <div class="cards">
        <v-card
          v-ripple
          v-for="project in projects"
          :key="project.name"
          max-width="344"
          @click="
            project.samePage ? $router.push(project.to) : open(project.to)
          "
          @click.middle="open(project.to, '_blank')"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="mb-2">
                {{ project.name }}
                <span class="new v-align:middle text:xxsmall" v-if="project.new"
                  >New</span
                >
              </v-list-item-title>
              <v-list-item-subtitle>{{
                project.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
h3:not(:first-child) {
  margin-top: 1em;
}

.avatar {
  transition: border-radius 0.2s;
  border-radius: 4px;
  height: auto;
  width: 100%;

  &:hover {
    border-radius: 0;
  }
}

.information {
  margin: 0 1em;

  p {
    max-width: 500px;
  }
}

.skills {
  margin-top: 0.5em;

  div {
    margin-top: 4px;
  }

  .progress {
    border-radius: 2px;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
}

.socials {
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
}

.positions {
  max-width: 500px;

  div {
    display: flex;
    justify-content: space-between;

    .logo {
      height: 22px;
      width: 22px;
      align-self: center;
      margin-right: 8px;
    }

    a {
      text-decoration: none;

      i {
        margin-left: 8px;
        font-size: large;
        color: rgba($color: #fafafa, $alpha: 0.75);
        transition: color 0.2s;

        &:hover {
          color: #fafafa;
        }
      }
    }
  }
}

.projects {
  h3 {
    text-align: right;
  }

  .cards {
    float: right;

    div {
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      cursor: pointer;
      transition: transform 0.2s;

      &.v-card {
        &:not(:last-child) {
          margin-bottom: 0.5em;
        }

        &:hover {
          transform: translateX(-15px);
        }
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .row {
    display: unset;

    .avatar {
      max-width: 50%;
    }

    h3 {
      margin-top: 1.5em;
      text-align: left;
    }

    .cards {
      float: unset;

      div.v-card {
        max-width: 100% !important;

        &:hover {
          transform: unset;
        }
      }
    }

    .col-2,
    .col-4 {
      flex: unset;
      max-width: unset;
    }

    .information {
      margin-left: 0;
    }
  }

  .positions span {
    max-width: 35vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

<script>
export default {
  head: {
    title: "Ana Sayfa",
    meta: [
      { name: "og:title", content: "EGGSY's Website" },
      { name: "premid-details", content: "Viewing a page:" },
      { name: "premid-state", content: "Homepage" },
    ],
    link: [{ rel: "canonical", content: "https://mehmetali345.ml" }],
  },
  data() {
    return {
      skills: [
        {
          name: "Javascript",
          value: 99,
          color: "#ffca28",
        },
        {
          name: "C#",
          value: 90,
          color: "#75ac64",
        },
        {
          name: "Java",
          value: 83,
          color: "#0074c1",
        },
        {
          name: "C++",
          value: 80,
          color: "#00c58e",
        },
        {
          name: "Html/Css/Scss",
          value: 78,
          color: "#41b883",
        },
      ],
      positions: [     
      {
          current: true,
          service: "Katil CivCiv - Discord Botu",
          role: "Website Geliştiricisi",
          icon: "/images/projects/favicons/kc.png",
          url: "https://site.katilcivciv.cf/",
        },  
      ].map((i) => {
        if (!i.samePage) i.url = `${i.url}?utm_source=mehmetali345.ml`;
        return i;
      }),
      projects: [
        {
          name: "Kişisel Blog",
          description:
            "Kişisel genellikle güncel konulardan veya haberlerden bahsettiğim bloğum.",
          to: "/blog",
          new: false,
        },      
      ],
    };
  },
  methods: {
    open(url, target) {
      if (!target) this.$router.push(url);
      else window.open(url, target).focus();
    },
  },
};
</script>
