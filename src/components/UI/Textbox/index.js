import { generateUniqueId } from '../../../utils/index';


class TextboxProps {
  static toSheme() {
    const props = {
      value: [String, Number],
      placeholder: String,
      tabindex: {
        type: [String, Number],
        default: '0'
      },
      numberic:{
        type: Boolean,
        default: true
      },
      label: {
        type: String, 
        default: ''
      },
      name: String,
      id: String,
      error: Boolean,
      success: Boolean,
      rows: {
        type: Number,
        default: 5
      },
      cols: {
        type: Number,
        default: 50
      }
    }

    return props
  }
}

const Textbox = {
  name: 'Textbox',
  props: TextboxProps.toSheme(),

  computed: {
    _id() {
      return this.id ?? generateUniqueId('id')
    }
  },

  watch: {
    value(v) {
      this.$refs.$input.value = v
    }
  },

  render(h) {
    let className = 'ui-textbox field'
    let uiTextboxClassName = 'ui textbox'

    const props = this.$props
    const attrs = {}
    const textbox = h(
      'textarea',
      {
        ref: '$textbox',
        attrs: {
          type: props.type,
          name: props.name,
          id: this._id,
          placeholder: props.placeholder,
          tabindex: props.tabindex,
          value: this.value,
          rows: this.rows,
          cols: this.cols
        },
        on: {
          input: e => this.$emit('input', e.target.value),
          focus: e => this.$emit('focus', e),
          blur: e => this.$emit('blur', e),
          keyup: e => this.$emit('keyup', e),
          keydown: e => this.$emit('keydown', e),
          keypress: e => this.$emit('keypress', e),
        }
      }
    )

    const children = []

    if(props.error) className += ` error`
    if(props.success) className += ` success`

    if(props.label) {
      children.push(h(
        'label',
        {
          attrs: {
            for: this._id
          },
          on: {
            mouseover: e => {
              this.$emit('labelMouseover', e)
            }
          }
        },
        [ props.label ]
      ))
    }

    children.push(h(
      'div',
      { class: uiTextboxClassName },
      [
        textbox,
        (
          (props.error || props.success) ?
          h(
            {
              props: {
                name: `formcheck-${props.error ? 'error' : 'ok'}`
              }
            }
          ) :
          null
        )
      ]
    ))

    if(this.$slots.message) {
      children.push(h(
        'div',
        {
          class: 'validation-message small',
          scopedSlots: 'message'
        },
        this.$slots.message
      ))
    }

    return h(
      'div',
      {
        class: className,
        attrs
      },
      children
    )
  }
}

export default Textbox