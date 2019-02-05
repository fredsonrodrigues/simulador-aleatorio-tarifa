import reducer from "../Reducers/FormReducer";
import * as types from "../Actions/AllActions";

describe("Reducer test", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      form: {
        plano: "",
        origem: "",
        destino: "",
        valor: ""
      },
      simulation: [],
      loading: false,
      page: 2,
      codes: [],
      plans: []
    });
  });

  it("should handle FORM_SUBMIT", () => {
    expect(
      reducer(
        {},
        {
          type: types.FORM_SUBMIT,
          payload: {
            plano: "30",
            origem: "011",
            destino: "016",
            valor: "30"
          }
        }
      )
    ).toEqual({
      form: {
        plano: "30",
        origem: "011",
        destino: "016",
        valor: "30"
      }
    });
  });

  it("should handle LOADING_TRUE", () => {
    expect(
      reducer(
        {},
        {
          type: types.LOADING_TRUE
        }
      )
    ).toEqual({
      page: 0
    });
  });

  it("should handle PAGE_1", () => {
    expect(
      reducer(
        {},
        {
          type: types.PAGE_1
        }
      )
    ).toEqual({
      page: 1
    });
  });

  it("should handle PAGE_2", () => {
    expect(
      reducer(
        {},
        {
          type: types.PAGE_2
        }
      )
    ).toEqual({
      page: 2
    });
  });

  it("should handle FORM_DONE", () => {
    expect(
      reducer(
        {},
        {
          type: types.FORM_DONE,
          payload: [{
            plan: "FaleMais30",
            valor: "R$ 10,00",
          },
          {
            plan: "Sem FaleMais",
            valor: "R$ 30,00",
          }]
        }
      )
    ).toEqual({
      simulation: [{
        plan: "FaleMais30",
        valor: "R$ 10,00",
      },
      {
        plan: "Sem FaleMais",
        valor: "R$ 30,00",
      }],
      page: 2
    });
  });
});
