pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'cd vivek-patel && npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'cd vivek-patel && CI=true npm test'
            }
        }
    }
}