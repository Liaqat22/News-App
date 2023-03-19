import React from 'react'

export default function Newsitems(props) {


  let { title, description, imgurl, url } = props
  return (
    <div>

      <div className="card " >
        <img src={!imgurl ? 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgSFRYYGRgYGBgYGhgYGBgYGBgYGBgZGRoYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQjISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0ND0xNDE0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYCBwj/xAA/EAACAQIFAQYDBQYFAwUAAAABAhEAAwQFEiExQRMiUWFxgQYykUJSYqGxFCOSwdHwFTNygrIkouEWQ3PD8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAwEBAAMBAAAAAAABEQIhMQMSQVEEIjJxE//aAAwDAQACEQMRAD8A9emlNNNKatB5roCa4mnRqRx2y09cF5paqB4dTTTXNKKCd6qU1xNKaD13NPXIpTQbulTUpoB6VNSpA9PXNPQCpUjTUAqempUwVMaalNAKmJrqK5IoSakBSJpgaYJmphTKKmC0gjcUGzjFFFJmjjrWc+I8td0bQYMdaz6l/GnNk9sKfiMs72nCkHig9/OLclHSCDHANZ/N7dyzelgQytPkfer+Ky4XEXFu+iyQNTkSzeARftHpRPQvt22Nw396qeh/+PWF7qYRCo2Bcy5/1edKmH0XNLVUequkInfYVoxdaq6B2qKa6bw8KDdTSBrG37mMuXGuLcRbYci3bDOB3G0zcKqGcyp2DAbx60MwzS+rhXe0e9DAYTEuANJIKM1zS51aVgfe8oq5wHoDXAOSB6mP1qu+Z2VMG9bBJAALoCSTAET41l8JgGYC5qRdQB7uGtK2+++rVV1cIhdUcl2C6116AAVYCQiKqSNSwYnzpfWBqNdOCKqZdd12kuH7SI3uVBNTlqjD1JSiuAa6DUxp6eaYNTikEWJxK21LuwVR1P6AdT5VSt5qWllsvoH22KrI8VE7j3nyoTm2IbtFuBlbUSlhWjsiwK7s43DsZgie6oHMgy4bMWdGd5QoYZF5DcALHzBto8ZjYyBX18KGcDmKXRKkzzBiY4kEEqwnaVJE7c1crzS9jcTfulrEpc7QoqLGmUTvh26vDgFjsNMDmvQ8JiBcRbiyA6hgCIIkTBHQjgjypdc4E5Mb+Fc27iuodSCrAEEbgg7gg1TzTEXUTtLSC4VILW50syD5uzPBfqAdjESJmqq6U7S2twqrjUqqpL2mcEsdIB0rMMAepbpSwC9KhmPul0DLfW3bHeuXQVBCj7K6gQsnkngAjkyCFq4GAZeDuDBEjx3oDukKakaEmJpTT6afRQHHPlT6DFSBK6Ao08RKtS0opmaKQzDMapYy6IqLMceEUmRsJJJgAeJPSsNifiIu5CN5a+PZB0HnzTkK0s+yxC5uOgdulvp6uf5VlrmEe/rt3N9u6Ngqj7qgcAVq0xSqp1EUFvYxQ2sdD+VR1MPi74Yi7kzqSpjbamr0Ts1bvRM78Uqz2tvD0cA9BXdu2TMdKhS4RMHmkrkcGK6XL4T2xvB2jn2rljvSuQODM9f1/OKjmgUFsXAutPu3bnP43Lx/30L+IHBNtjwrKxj8F6xc/wCKP9TRAJF3EedxGEeDWbY/5K1DPiRJtAD7TMhn8dq4ix/vZPpWnPs17B49ERLbk61RRpCOxIWUkBQZ3U8VJgsal97d9CwVe1tww0kluzcGOYhDE0ETNXXs3V3RX7eSi2ySA630E3NgNF1uN6jy/GTcVQCoDq0MyljtcttOnYb3VBXoVp/U26ym7qtDwVnT2S46D8lqnnuataAt21OtxIYqWRBIBYgCWPMKOSOQN6kyQgK6jpdY+msK5/Nyfem+ILeq0R+G4Praes88gETM8Sdi971/ZlTb0ZJrs4jEt8t/ED0s2T+tqucRhbAfSliwGKho0oCBE6o07Dzpr2IQ2nFs2mIDf5YBh1RyFgHvMNjBEeRq/H8OReyfE4lmVnuEWjcKDWqG5cKhpgIihBKkbydunXUhqwPw9irjJa1ksf2nSSeh1EcdBHTpW6qOp5DL2lU2FsOiOEBtuGDEk2yUbYKfmClhvwVNCXsNZufug7tq1IXdrhg7SrO7fZ18wdj6jWY3L3L9raIDGA6N8jxGlpAlXEDfqNiOCuazgOSysjqyomnuExDPphkLwDLLMjanzdAvkmIi0Lj6dTlgdEyWDEBRO5jfy5PWi2SgdlqAgO9xwJnZ7juCD4GZHrQPKMouFStxSiszM5JBd5O4WPlUiJYw3IgHetQqwIGwGwA6DwFT1gVcwsqQrG01xlYFdJVXU+IYssDYTvvxvQFsS9nD3GEhxdxCtG7F3unQTA37jArP4R4VqGUEEHgiPrWR+JMytYVxbJ0K9tOELInZv3SwUSARIn8Io58+Ak+GcczsNe+tXeW27qsmmZ2A1NsOd/WTqtie0GpLItyZIuO1yIMGCgA3jaevNUfhkWblkXEKurDRIErptkrpgjiQTv4ijlm0qiFEAcDoPIDoPKjq+QkVa6ApCmLVCnVKo9dPNGDXc0prilRg05aq2IYgTMenJqaK4ZJ5plWbzjLhiF0vKjcjRx6sp+Y+Yis2/wAIuN0OoeIO3uDuPevRjbHQfWqz2j4kem1NNjzTFZGUHfuQPAbmqCXraHSiFj4n/wA16bictR/mXfxGx9xwfyoRe+G1ElQD6c+4pWaU6sZNcfc6Kv50q0f+C0qX0h//AErV2PmEQd+tNe+YyI36cVCrQZHIqe0SzST5+W3H8qtG/h75EwOgj3qMGmaR/fNIGmNUDh/+puMQCGs2T7q95T+Wmh/xBhh2ZY7Kj2rhPh2d1HP5KavYx2F9DwptXAT5q9ogfQvQ74gxAfDX0YgI1p1J/wBSlR7yRVc7sXsxncBgUxINsuyiyywi6IMILJLalJ+bDniKJX8ot2Ue8ijXrtuzszEkLetu55gToEwN4FDvh2+vbXO6wNxSRCtGrUb8MY2MYgnfzo/j8I92xetrsWtOATsAxQ6STBjeKu3KVFsoaLl5P/jf+IMn/wBdXMyw7Oi6eQ6kCYkbqQTBgQx3g+hobkV9XdnQFgbaK1yCE1ozHSsjcjW0npxsdqNzWd9hlcZlOKeEFuwUhQQ9yCdAhSSLDayPEx5AV2mQXlBXskGsQSmIKMvIBX9yJInrRrNMw7NVVdJuOStsMYWRy7noijcn0A3IoQ+eQ0Xcww2obFbFoapiYANy4ZjfiiWnBHJ8k0EatcI7XBrcOzOw+ZmHzaZMT1IPSj0VkrvxEqpIOIuMQ+g3FFlWZVLQYVDG3RT70QyJ7im5bu3DccFH1cCLi8IOiBkcAbmOSTvSsvuq2LGfM2hVW4bepoZxsdIVmjX9mSAJG+9DLNlCrh7jOzqFZi+ptK6o0kcAF2I9a0geu2IGwqZc8EwhwN2y9lhicRdd79tSNblQmsFyyydtHM+dbym1CPOquIzCzb/zLltNuGdVP0Jp22harF/Hfwq+LZLtnZ1Vkch1WUnUqwwiNUyQQfWtVhsbbuGEuKxiYDCYMwY6jY7+VWIolsuwBXwtka4PDJhg2rTqZmO0s7FmgeG8D0o2tQsY2+tOrxU3b5p6nNRs3nVW/j0QSzAAcyYH1oa+f4cxF62QeCHT6c0TmlehsMK7FUMJiQ5hd+vtV1TRYcqauZphSpGc00UqUUA0VyVruK5NMq4KVA9urMUzL1plirpP9x/SlU0UqCxSwzwTC6tvp50zPtMRqPA8B/5/SnwZEkSRIgR51xfENpB2UAf1/Oaf6j8dPeJgHpT2xPp1qJFmumcfKOP1p4EGYYbtChVyhQtBADSGEEEHboPpXeEyUMNTXrpPUDs1H/ak/nQzEY3E62CWLZtggdo98pPIMILZkyDtPTpTJmWLJK27FtR943C5MdSBEegp2XFc3+iP/p+xbLtN3vkM37+8NTKioGMMPsqo9qm/ZU2GmQvAMtH8RO/nzQRMXiQS1xrIUKzaUR9RIBMamYjmiWS4truHtXWjU9tHaNhqZQWgdBM0Zf2i1etoqgKoAAEAAAADwAHFSTUYNOKkgb4kwKO+FdkR/wB49nvoHVRdtkhgpPOu2gB86D5rhUtMyq1y420pbS2FBVYMSjEGCoOmekxWi+ILROFuON+zKXh46rDrd29dEe9AcmxqI95CGL9oxJC6iUgFYjcjUzGBPzz9oTfO4rfCnk2OwmIuHDut0XR9i690gyCDpBIWedoFHskuNrsluXwpRz+OwyCPq9z6Vl/i0qcdhGtGbpgNp3MB1jUR+Frh34CmtGrBGRhsLeMIPmMSpEemu+p/2iq6ngNXaWTFO1szA9qVjYE+G1RM5PJrA/GHPh7V5pkGCS+qC4bjOyi41xWu63JGhyxt94gMAYOw1iK9JDDk8V41kbXbwa2t17SW2dNSsVd21SQukghY07z7Hpc655ltuK4466uSNViGRcwwjKinTdNhWZYcKLLsd2Gr59fPjW/1wJ+n9a8g+HMGy42z1VXR9RABEGCG6hpZQPvG55V6+byjvGN+PSl8nfPjz+H9OtyIDerpjIro3rb9RPiKrYi6E5NTz3z16R1z1z7ZH48yHtVUtEpuJZtIBiTpB3IjagOR2bbppGJxGgnSG7MkF+uhSveA5J4UckVv8YispL8eBn6GN/Yb+nNec/EWdsl4Wkd0UhQUVFJYFtKBiPlWdgibDkyd61luYhtcqZrACI1t7byVdBpZSoCydPduMSGkwgE7CKNYa43Mn3qlkTvcshLjgmVMbl426nw9+tFROkqN1U8nY/3vUW6ftbOIBiKkDzvQ9TU9p+lTipVwGkTUKXalJkUHpTSmmBp6DKm8qcSadxSCKKVLelTSFYUL3mJ3USPXp+cVxbXVToDpAHLGfYV2wAETC+PVvQeFWzJjPcX/APacQvPePh0Hr41C1/oBA/M+pqti8UttDcYMQOiqXY+QVdzTwtDcPeY4jFIzSC6MqnhVNm0IA6DUGMeZojZbSZX85/Ub1k8dmF9rjXMPYdS6oG12maNMgd5R3TB3G4432pxbxzcq3G+lmQT6HTt71d5Np7qkhzHKt0noeD1pvhg/9MinbRrT+C46D/jWfGXY5vuDb7e8e4uGfpRLK8vxaQHvLEkkTI3MmFZCeSdtVKyZ7DSTTzUag+voK6CN90/Q1AO41AqeGBBHiCINYS/hsO1m3211bdxFNpnLqpc2SbZ1KT3jKHfn2reaD4fWB+tRLhEBLBEBJJJhJJPJJG81U6w2JySzhrb9pb7S87CA6W7jgA+DQVExyW+lHrOWvedy6Mlg9k7I2kO72mJHyMYTa2TuCdAHE0fj8Q/P+lSWwNxP0Bo66M5cxp6c1zNLu+J+g/rSkeB+oH8qgIMef3b/AOhv0rxPL77WzoZGDs06UVmlnM90LJ5Mf1r3JmWCCu0eNef4x0skt2FvXqYW9RuMQglWcy/XcCPBj0E4/Ln76rr/AM3Vm4DZvfKPhhZmbeIS45AKq9xWhlQkd8AFgIkbuZiK0OZfEBMLsIFVLGaW0RVt2bKQO9ptpBO3Ez51QwuaYy9cfszbS2h79xlRVQQCZITmDMT6wN65u5PlyT8dvx2fHvXUlG8qxzswCgmfAf3HrWizTEMiqwRncjhVMAjrPT158I+asZjvjFram3aJcKjM1wvpZ9POgRsPb2kaiYxVi7etIQ7bEz3jPvWnxfH9Opn65v8AT39+bb4x2Lt9/mRh9FA9ATtQnNMnLsrnQrDh2ZAV9DyKTZG/LMfqaF5smgRtXX5ed40cwQ/Z2L/tVkuOGDgzt8sARFG8LmaP3u2Un7WmTJry3CWmd9hNbLJcqZYYzvzSkp2xu8LiEYbNPtVpXWs3oKbg1Zw2OmngnQ+SOal7URsKpWHLCux5kVOLlWA9OblQK4pPdowanV/KkbvjVBr58a57WjC+y/2wpqo6qVPC1cxdoASsA8e3kKGXLXVmb+E1BexLOZY8fSuUvMOGI96qSxPXUqbufjP0FOrJ91v4v6CuP2pjzpPqo/Xmn7VTysf6WI/WaZak7RfufVjTi8Pur9Cf1NRjQerD1AP5g/ypBPBlPvH/ACigbUvbnwUf7V/pWWxnxbdRtM2twSu7gEDc7jaR/I1puybwMePI+orzizgdYRmgIiqCx0mWgPCr1O4529pmueZfZyjdv4rxbFR2ds6oIg3DseD+v0NEsJmGKef3domYMl+76waFICAI7urjnW0878idpbk8CNqtYdyFNpUkzvGwBP3j4+e8DYAmTTsn4cs/VrGZrfspcd0tnQjsI17uqkqpnoTA96NYa7rRH+8qt/EAf51l8fh3Nu47sWL6EC8IFLqD3eJPuYjzo/lLzYsnxtWz9UWp6ngl8GocRmKWSpdo1GFXcsx66VG5jk+FSTWFzO437TfZ51q6ogbYdkURkVfAMS5nqZ+7AU50QXz5mxLdnbuOgWf3c6FuNMw7IdWmBEA9TIPFZ5HTBFMRbc2te7WdTMHCOFvI9oTLL3iHUcjkjkot6GS6kaioLK8pDAlSG2lG25IKt49avYn4YGJbt3Qh20ylwIywswFZZKHckMrbEzvuKvZzMvpcmr+W/E+FvsyJcII0gh0e3JclVVS6gEsQQBzsfA1mfidIuMXHPHkOAB5AbU/xH8MMlsWkDMglrfJd3cNKtAnVpAUeob5pJvYy6beHsPfQPieySVMMgcLuzaTDHrpmPWuT/TOfrLL+un/NLLYA28GiW/2jEMyWyJVB/m3v9CnhfxHb6zQV87bEarYUW7SMBbtJOkd0GWblm8z18yZ4znMHulnZi7tyTz6DwHkNqGZaQNRcqpLcMY4A3FY8ZldNl/RG5bOhx00Ee7QPpv8Aka9XyZ1W0AfOvMctv27pFvWut4AQEs25GxVRWwxy3LZAZkRfxuFPsm7H2Fa8b9ps/rD5/wDr4R/GeZhArLBIDxPAbYAnyk8deKx97MDdgHxMn/casfEuKsQC9x38kUIvzJ9t9/H7NRZBjldlSzh7aEz33LXWG5370L9FrqvqOKRr/hjALp2SfMCtM+lB3mVPUifoKEYzDYhLSOHZg2xGwHE7BYA60BxOHvNzNTulMaC9m9kHTLP6d0fnvUD5qE3RFUePJ+prM/4bcng0TwuBdhDCkNG8BnLMwluaNLiB9ay1rAFOaOX1C2keW1MOCIA9DTomi1q5NSXDtQDC40SN6M2roYUrBKr3QelQywoxbshqa7hRxRp/UH7elV/9iFKjSyhc081xNPNWh2DU2GCEnWSBG0czVcGp8MEJOskCDEeP9zSpz24BroGowacGmSZGg1lFfMEBTsBdAclWc23IiAIL3Aek8Aia04NQYnBJc+dZ6fMy7f7SJolxUuMljc/fCr2mLwbLrOjtFKBi0FoGm62gQp4HTxotlebi7bS4mGvaHHdZDbddiQTuQeQfOrj/AA/hiINuRMxruQD4gaqZfhzDAQEYDyu3h+j1ew9NeZ3XQLTqCV7zBgwhg3y6YPHjRfK8C9uxattBKW0QlTIlECmPcVVwmUW0YOgeVB/9286wRBlWcg89RRGxe0tqifKo6v8ABsdKIIJBiePGhuf5TbxTBjqR1XSrppD6OdDBgVdZ30sCB0g0R7duZ9qmw8uYIEeMVO55E/kAbOUtbtiL2yFu8bSMwR4lQTwJWY86iuYy5p0riLglQdWiwq2knZjNswWiANyRwJIrbJZUCIEdaxXxItntig0kiG0MzBAxG50qVlojck7bcbVh8nVt3XV8WTxZqtdx+tOy7W/cUEl2IRGuLxobs0BVPIQTwTEihWYG+XDQEAEDtCqCPIMQSPQGjWX37ttWC9nBH2VCR0+z83PWayWY2HVj3Sfea5ut69urizn14UbuGsgy90sZ3FpCR7u+mPZWq/l7WgQUsifvXHZz9F0p9VNAritMsCPY1ImO07ClfXhpLN8t3hswOy64H3VARf4VAFRfFuGm2LgHBB9qAZHd13FLnaa9VsYVHQAgMI4O9V8OzpH+ic/WR4VmOF1geRneuMld7NxWAkg8eIJ4r2nM/hTD3FOlAjdCu35cGvNrmBbDXmR1kjbwkdCDXbOtmPN6lntscJn3bBUYBAv2fPxM0csqjDpXm6WXDdoNpM0bwGYusAnaqxnrXPhx0FUL91U8qs4PFaxzU17BI43FBs3j8yQiAaqY3O7siy5UhQCCvXaK0dnIbaMzaA+oEQeh8RQbFfDcGR0qbugEbMdLjzo1gs808naqGLyRo43FVLuXOBxT8jw9Fy7NUYbQZokjg15XZuPaRBodWJnUQQGXy/KtLlfxBwH2peKc6sbKKVDreaLA3FKjFfaAs0priaU1owSe9WzgXClzAAAPO5BqgGrpnJ5JMbCTwPAUYcsdhq6DVEDSBoJbvYlmCgx3RAgenP0rgNSs2GZSwiFEmTv7fSowaDu/qSacGuJpwaAsWrxWYMSINczUQNdaqMPXc0Wy4d2g2qjmXnuCs+/TX4vdLMbxS2zD7ImvOEzfULjBVOuQS3I53H1r0POVmy4/Cf0rxjD3ShI6Sa4/lm9O74bPrY0Fi/5xQTMsc6uYbbz3p0xRmq+P3M0tVjj/ABVvtKD6bVGcdbY95Y9pqlcquFqtKNJlxtlpUgHyMV6FkmYwsE15TloEmaK4LOChKg8VE8da06m85XrNrHjxrL/FFtXuowHSCf0oRhs3ZjsakzXMNKAxvtW3x9f8nL8vM+tFLGXSvFUrmH0mCKM/D2PW4gojjcEriY3rr1xYzuGDL8porZx7ryKqdloMEVfwwVqKIvYfHq3WrqQaEXMuB3XY1Gty5b53FSe/0afCqelVL2WqelSYTMA3PNX1YGluLyUIx2ENxVRoheIG/Eb0ExOQeFbIqK4NoUSlYxH+GXBtJpVtf2cUqf2T9WVmlNMaaatm6mkDXM001QSg081FNPNAShqcNUQaug1Bal1U4aoga6BqTShqcGoQa7BoNJNGcreVoIDVrLbh16Oh3rP5J4a/DfNg7iE1KR4ivGc1wpS46xwxj0mvaWFebfFmG77MB1rG8fb06Oe5z7Zawd6kx6yoiosEwLQTB86vY7TEAisrzkdE61nbiUy2quOgmplwx6ClIVsipatkUz4chtQogtk+FSrapzm/w73JPZsACNzU2NxGshagd42FSYLDkma6Pj+LLtcnzfNLMg3kTG0w8DW6w1wMKyuEw4K0SwF8odJ4rbqObmiONwercUDvI9syK1dpwwqHE4UHpU6q8g+AzgHutsaMK6uKz+PyrqtVsNjXtGGmKeCXPbQXcFvK7VesPC71TweOVxsauMsipsVK4/bVmJqwl8Gs/jcC4OpTXOFxpGzUYn7eWm7UUqFdt50qMVoGTTTTE1yTWzndTSmuCaaaAlmlqqKaU0BKGpw1RBq6DUBKGroNUIanDUKTg10DUAaug1ATg0mdh3k+YcVGGroNU3nZh89Xm7EmHzO+RpYf7jUeLsB1IO5rsNT6qjjic+mvy/Lfk9yT/wAedfEGSujF0rMO2JBgqTXs960rcih13K0O8CqvHPXtPPydc+I8/wAowl1mBcVtMNhgF3FWlwiJwKivPTnHM9J676vtUvovhQ7ENVvEPQzEPQW1zZWWo/grIiqGS4bXWmXLyF2oKnwpjarV23ImqNsFTBq9aeinEmAxuk6Wo9auBhWZxNqdxT4DMip0tU2LnWNFdsg0KxuXBulFbF8MK7ZAanTs1i7mGe0ZWaK5dnE919jRa9hgelCsVlIO45pllg0jq4qhjsuB3HND8M72zBkijmHxIcUehsoF3xtHFKtD2IpUaPqyRNck0qVasXJNc6qelQDaqWqmpUA+qutVKlQCDV2GpUqA6DU4alSoBw1dh6VKgOg9PrpUqFGL1E70qVAVLtyh996VKgB996G33pUqmnB34SfvRXoK2wVpUqVVz7CcfYjeqtp6VKnE32sq81TxdjqKalSDrL8xZTpNaTD4nUKVKpquVkNSIpUqS0NywDVNrRQyKVKiFVhcVTUqVMP/2Q==' : imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-primary btn-dark">See More</a>
        </div>
      </div>
    </div>
  )
}
