<template>
    <div class="user-profile-edit-body">
        <div class="user-profile-edit-left-block">
            <div class="user-profile-container">
                <div class="user-profile-avatar">
                </div>
            </div>
        </div>
        <div class="user-profile-edit-right-block">
            <div class="user-profile-container">
                <div class="user-profile-mood" id="mood">
                    <select class="user-profile-edit-select">
                        <option value="vbad">
                            Very bad
                        </option>
                        <option value="bad">
                            Bad
                        </option>
                        <option value="neutral">
                            Neutral
                        </option>
                        <option value="good">
                            Good
                        </option>
                        <option value="vgood">
                            Very good
                        </option>
                    </select>
                </div>
            </div>
            <div class="user-profile-container">
                <div class="user-profile-sex">
                    <select class="user-profile-edit-select">
                        <option value="male">
                            Male
                        </option>
                        <option value="female">
                            Female
                        </option>
                    </select>
                </div>
            </div>
            <div class="user-profile-container">
                <div class="user-profile-age">
                    <select class="user-profile-edit-select">
                        <option value="more18">
                            18-
                        </option>
                        <option value="less18">
                            18+
                        </option>
                    </select>
                </div>
            </div>
            <div class="user-profile-container">
                <div class="user-profile-voice">
                    <select class="user-profile-edit-select">
                        <option value="voice-on">
                            No voice
                        </option>
                        <option value="voice-off">
                            Have voice
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="profile-edit-buttons">
            <div>
                <button>
                    X
                </button>
            </div>
            <div>
                <button>
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import vSelect from 'vue-select'

  export default {
    name: 'VmUserProfileEdit',
    components: {
      vSelect,
    },
  }

</script>

<style lang="scss">
    .user-profile-edit-body {
        display: flex;
        width: 250px;
    }

    .user-profile-edit-avatar {
        height: 50px;
        width: 50px;
        background: black;
    }

    .user-profile-container {
        margin: 5px auto;
    }

    .user-profile-edit-select{
        width: 100%;
    }

    .profile-edit-buttons{
        display: flex;
        flex-direction: column;
    }
</style>