'use server'

import { assertIsNonBlankString } from '@/app/assert-type';

export async function myAction(formData: FormData) {
  const item  = formData.get('item');
  assertIsNonBlankString(item);
  console.log('SERVER!!!!', item);
}
