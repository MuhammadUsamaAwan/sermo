import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';

export function ModelSelect() {
  return (
    <Select defaultValue='llama-3.1'>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a Model' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='llama-3.1'>Llama-3.1</SelectItem>
          <SelectItem value='deepseek-r1'>Deepseek-r1</SelectItem>
          <SelectItem value='gemini-3'>Gemini-3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
