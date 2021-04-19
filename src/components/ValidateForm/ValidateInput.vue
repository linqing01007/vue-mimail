<template>
  <div class="validate-input">
    <input
      :type="type"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.value"
      @input="updateValue"
      :placeholder="placeholder"
      @blur="validateInput">
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface RuleProp {
  type: 'required' | 'custom',
  message: string,
  validator?: () => boolean
}
export type RulesProp = RuleProp[]
interface pt {
  name: PropType<String>
}
export default defineComponent({
  name: 'validateInput',
  props: {
    placeholder: String,
    modelValue: {
      required: true,
      type: String
    },
    type: {
      default: 'text'
    },
    rules: Array as PropType<RulesProp>
  },
  setup (props, context) {
    const inputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })
    const updateValue = function (e:KeyboardEvent) {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.value = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = function () {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let pass = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              pass = (props.modelValue.trim() !== '')
              break
            case 'custom':
              pass = rule.validator ? rule.validator() : true
              break
            default:
              break
          }
          return pass
        })
        inputRef.error = !allPassed
      }
      return true
    }
    return {
      updateValue,
      inputRef,
      validateInput
    }
  }
})
</script>
<style lang="scss">
  .validate-input {
    // width: 316px;
    height: 50px;
    // line-height: 50px;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    margin-top: 20px;
    input {
      width: 100%;
      height: 100%;
      &.is-invalid {
        border: 1px solid red;
      }
    }
    .invalid-feedback {
      display: inline-block;
      width: 100%;
      color: red;
      font-size: 12px;
      text-align: left;
    }
  }
</style>
