pipeline {
	agent none
  stages {
  	stage('NPM Install') {
    	agent {
      	docker {
        	image 'nginx:1.17.1-alpine'
        }
      }
      steps {
      	sh 'npm install'
      }
    }
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t flow90/springboot-mongodb-atlas-frontend:latest .'
      }
    }
  }
}