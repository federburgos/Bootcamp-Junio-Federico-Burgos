import videoController from "./video.controller"
class VIDEOPROCESSCONTROLLER {
    
    async convert(originUrlVideo: string, videoId: any) {
        try {
            await videoController.createStatusProcessVideo('download', videoId)

            await videoController.createStatusProcessVideo('validate', videoId)

            await videoController.createStatusProcessVideo('convert', videoId)

            await videoController.createStatusProcessVideo('upload', videoId)

            await videoController.createStatusProcessVideo('notified', videoId)

            return {
                outputPath: ''
            }
        } catch (error) {
            await videoController.createStatusProcessVideo('error', videoId)
            throw error
        }
    }

    async downloadFile(originUrlVideo: string) {
        return '/path/download/video.webm'
    }

    async validateFile(localPathVideo: string) {
      
        return true
    }

    async createOuputPath() {
        return ''
    }

    async convertFile(localPathVideo: string, ouputPath: string) {
        try {
           
        } catch (error) {
            throw error
        }
    }

    async uploadFile(ouputPath: string) {
        try {
            
            return ''
        } catch (error) {
            throw error
        }
    }

    logExecuteProcess(newOriginUrlVideoConvert: string) {
        console.log("🚀 ~ >>>>>>> newOriginUrlVideoConvert", newOriginUrlVideoConvert)
    }
}

export default new VIDEOPROCESSCONTROLLER()