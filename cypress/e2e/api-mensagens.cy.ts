describe("request-api-adopet", () => {
  it("Should request messages in api", () => {
    const authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTczNzY3NTE2OCwiZXhwIjoxNzM3OTM0MzY4fQ._XWoxUYgwt2yn_9fcr0elDCkeKI7rq6ZL5-XWMgDZDA"

    cy.request({
      method: "GET",
      url: "https://adopet-api-i8qu.onrender.com/mensagem/6ed7e5dd-78b2-4721-865e-e766bcd8c881",
      headers: { authorization },
    }).then((res) => {
      expect(res.status).to.be.equal(200),
        expect(res.body).not.empty,
        expect(res.body).to.have.property("msg")
    })
  })
})
