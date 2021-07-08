 node {
     def app

     stage('Clone repository') {
         checkout scm
     }

     stage('Build image') {
         app = docker.build("jonggyoukim/jenkins-app")
     }

     stage('Push image') {
         docker.withRegistry('https://registry.hub.docker.com', 'docker_credential') {
             app.push("${env.BUILD_NUMBER}")
             app.push("latest")
         }
     }

 }
