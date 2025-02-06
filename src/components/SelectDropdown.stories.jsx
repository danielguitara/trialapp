import {fn} from "@storybook/test"
import SelectDropdown from "./SelectDropdown"

export default {
  component: SelectDropdown,
  title: 'Select',
  tags: ['autodocs'],
  args: { onChange: fn() }
}

export const Default = {
  args: {
    options: [
      {label: 'Option 1', value: 'opt1'},
      {label: 'Long Option 2', value: 'opt2'},
      {label: 'Long Long Option 3', value: 'opt3'},
      {label: 'Long Long Long Option 4', value: 'opt4'},
      {label: 'Long Long Long Long Option 5', value: 'opt5'},
      {label: 'Long Long Long Long Long Option 6', value: 'opt6'}
    ],
    placeHolder: "",
    withSearch: true,
    multiple: true,
    optionLabel: ""
  }
}