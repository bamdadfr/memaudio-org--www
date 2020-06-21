pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('error') {
      steps {
        mail(subject: 'subject', body: 'body', to: 'report@bamdadsabbagh.com')
      }
    }

  }
}