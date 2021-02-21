import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add 1 to 4 to get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add(1);
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15)
  })


  it('divide 21 by 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide(7);
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick(7);
    expect(wrapper.vm.runningTotal).to.equal(7)
  })

  it('chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.operatorClick("-");
    wrapper.vm.operatorClick("+");
    expect(wrapper.vm.previousOperator).to.equal("+")
  })

  it('clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.clearClick();
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})
