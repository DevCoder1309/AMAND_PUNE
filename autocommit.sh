while true; do
    if ! git diff --quiet; then
        git add .
        git commit -m "Process of AutoCommit"
        git push
    fi
    sleep(10)
done
