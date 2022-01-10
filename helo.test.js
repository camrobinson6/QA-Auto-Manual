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

        let title = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div[1]/input'))
        await title.click()
        await title.sendKeys('Helo test')
        await driver.sleep(5000)

        let imageUrl = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div/div[2]/input'))
        await imageUrl.click()
        await imageUrl.sendKeys('https://unsplash.com/photos/67xh_lAAl-U')
        await driver.sleep(5000)

        let post = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/button'))
        await post.click()
        await driver.sleep(5000)
    })
    it("Search for post", async () => {

        let searchBar = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/input'))
        await searchBar.click()
        await searchBar.sendKeys('Helo test')
        await driver.sleep(5000)

        let searchButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div[1]/button[1]'))
        await searchButton.click()
        await driver.sleep(5000)
    })
    it("See post on homepage", async () => {

        let postButton = await driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div[1]/a/h3'))
        await postButton.click()
        await driver.sleep(5000)
    })
})