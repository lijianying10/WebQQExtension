import web

urls = (
    '/', 'index'
)

class index:
    def GET(self):
        return "Hello, world!"
    def POST(self):
        i = web.input()
        n = db.insert('todo', title=i.title)
        raise web.seeother('/')

if __name__ == "__main__":
    app = web.application(urls, globals())
    app.run()