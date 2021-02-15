<template>
  <div class="sticky">
    <div class="mt-2 mb-4">
     
    </div>

    <div>
      <h3 class="mb-2">Beni Takip Et</h3>

      <ul class="follow-me">
        <li @click="open('https://github.com/mehmetali345')">
          <v-card class="profile-card pa-2" width="100%">
            <span>
              <v-icon left>mdi-github</v-icon>Mehmetali345
            </span>
          </v-card>
        </li>
        <li @click="open('https://twitter.com/AnakinS07677978')">
          <v-card class="profile-card pa-2" width="100%">
            <span>
              <v-icon left>mdi-twitter</v-icon>Anakin Skywalker
            </span>
          </v-card>
        </li>
        <li @click="open('https://steamcommunity.com/profiles/76561198801124383')">
          <v-card class="profile-card pa-2" width="100%">
            <span>
              <v-icon left>mdi-steam</v-icon>Mehmetali_345
            </span>
          </v-card>
        </li>      
        <li @click="open('https://discord.com/users/715487388247523351')">
          <v-card class="profile-card pa-2" width="100%">
            <span>
              <v-icon left>mdi-discord</v-icon>Anakin Skywalker#6419
            </span>
          </v-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.announcement-card {
  border-radius: 4px;
  background: linear-gradient(45deg, red, blue);

  div {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateX(-50%) translateY(-50%);
    width: 85%;

    h5,
    span {
      text-shadow: 0px 0px 10px #000000;
    }
  }
}

.profile-card {
  height: 35px;
  border-radius: 4px;
  background: linear-gradient(45deg, #212121, transparent);

  h5,
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-shadow: 0px 0px 10px #000000;
  }
}

.follow-me {
  padding: 0;

  li {
    cursor: pointer;
    color: #196ec3;
    transition: opacity 0.2s;
    list-style: none;

    i {
      width: 34px;
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }

    &:hover {
      opacity: 0.75;
    }
  }
}
</style>

<script>
export default {
  methods: {
    open(url) {
      window.open(url, "_blank");
    },
  }
}
</script>