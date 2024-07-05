import axios from 'axios';
import RequestService from '@/service/RequestService.vue';
import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

describe('axios-tets', () => {
  it('tets1', async () => {
    const spy = vi.spyOn(axios, 'get')
    const wrapper = mount(RequestService)
    await wrapper.find('button').trigger('click')
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith('/user')
  })
  it('test2', async () => {
    const wrapper = mount(RequestService)
    expect(wrapper.find('span').text()).toContain('李四')
    await wrapper.find('button').trigger('click')
    await flushPromises()
    expect(wrapper.find('span').text()).toContain('张三')
  })

})
