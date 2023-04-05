pipeline {
    agent any
    tools {
        nodejs "nodejs"
    }
    stages {
        stage('npm install'){
            steps{
                script{
                    sh "ng build"
                }
            }
        }

    stage('Docker Build') {
      agent any
      steps {
      	sh 'docker build -t shanem/spring-petclinic:latest .'
      }
    }
  }
}