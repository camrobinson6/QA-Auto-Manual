const { Builder, Capabilities, By} = require("selenium-webdriver") 

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

jest.setTimeout(30000)

beforeAll(async () => {
    await driver.get("https://helo.devmountain.com/#/")
})

afterAll(async() => {
    await driver.quit()
})

describe("Helo app functionality", () => {
   
    it("Must authenticate via login page", async () => {
        let userName = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[1]/input'))
        await userName.sendKeys('helocam')
        await driver.sleep(5000)

        let password = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[2]/input'))
        await password.sendKeys('password123')
        await driver.sleep(5000)

        let login = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/div[3]/button[1]'))
        await login.click()
        await driver.sleep(5000)
    })
    it("Make new post", async () => {
        let newPost = await driver.findElement(By.xpath('//*[@id="root"]/div/div[1]/div[2]/a[2]/img'))
        await newPost.click()
        await driver.sleep(5000)
    })
   
})