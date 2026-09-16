@echo off
setlocal
set "MAVEN_HOME="
for /f "delims=" %%D in ('dir /b /ad /o-n "%USERPROFILE%\.m2\wrapper\dists\apache-maven-*" 2^>nul') do (
  for /f "delims=" %%H in ('dir /b /ad /o-n "%USERPROFILE%\.m2\wrapper\dists\%%D" 2^>nul') do (
    if exist "%USERPROFILE%\.m2\wrapper\dists\%%D\%%H\bin\mvn.cmd" set "MAVEN_HOME=%USERPROFILE%\.m2\wrapper\dists\%%D\%%H"
  )
)
if not defined MAVEN_HOME (
  echo Maven was not found in the local Maven wrapper cache.
  echo Install Maven or run this command after restoring the Maven wrapper distribution.
  exit /b 1
)
call "%MAVEN_HOME%\bin\mvn.cmd" %*
exit /b %ERRORLEVEL%
